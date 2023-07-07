import type { Meta, StoryObj } from '@storybook/react';

import SanitizerOutlined from '../../lib/social/SanitizerOutlined';

const meta: Meta<typeof SanitizerOutlined> = {
  component: SanitizerOutlined,
  tags: ['autodocs'],
  title: 'social/SanitizerOutlined',
};

export default meta;
type Story = StoryObj<typeof SanitizerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
