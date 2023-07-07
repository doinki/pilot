import type { Meta, StoryObj } from '@storybook/react';

import ThirteenMpOutlined from '../../lib/image/ThirteenMpOutlined';

const meta: Meta<typeof ThirteenMpOutlined> = {
  component: ThirteenMpOutlined,
  tags: ['autodocs'],
  title: 'image/ThirteenMpOutlined',
};

export default meta;
type Story = StoryObj<typeof ThirteenMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
