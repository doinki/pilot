import type { Meta, StoryObj } from '@storybook/react';

import EightMpOutlined from '../../lib/image/EightMpOutlined';

const meta: Meta<typeof EightMpOutlined> = {
  component: EightMpOutlined,
  tags: ['autodocs'],
  title: 'image/EightMpOutlined',
};

export default meta;
type Story = StoryObj<typeof EightMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
