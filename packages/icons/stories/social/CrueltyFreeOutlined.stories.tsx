import type { Meta, StoryObj } from '@storybook/react';

import CrueltyFreeOutlined from '../../lib/social/CrueltyFreeOutlined';

const meta: Meta<typeof CrueltyFreeOutlined> = {
  component: CrueltyFreeOutlined,
  tags: ['autodocs'],
  title: 'social/CrueltyFreeOutlined',
};

export default meta;
type Story = StoryObj<typeof CrueltyFreeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
