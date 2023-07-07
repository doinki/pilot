import type { Meta, StoryObj } from '@storybook/react';

import SixMpOutlined from '../../lib/image/SixMpOutlined';

const meta: Meta<typeof SixMpOutlined> = {
  component: SixMpOutlined,
  tags: ['autodocs'],
  title: 'image/SixMpOutlined',
};

export default meta;
type Story = StoryObj<typeof SixMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
