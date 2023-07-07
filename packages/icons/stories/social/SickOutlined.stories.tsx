import type { Meta, StoryObj } from '@storybook/react';

import SickOutlined from '../../lib/social/SickOutlined';

const meta: Meta<typeof SickOutlined> = {
  component: SickOutlined,
  tags: ['autodocs'],
  title: 'social/SickOutlined',
};

export default meta;
type Story = StoryObj<typeof SickOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
