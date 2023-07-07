import type { Meta, StoryObj } from '@storybook/react';

import TenMpOutlined from '../../lib/image/TenMpOutlined';

const meta: Meta<typeof TenMpOutlined> = {
  component: TenMpOutlined,
  tags: ['autodocs'],
  title: 'image/TenMpOutlined',
};

export default meta;
type Story = StoryObj<typeof TenMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
