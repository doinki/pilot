import type { Meta, StoryObj } from '@storybook/react';

import FifteenMpOutlined from '../../lib/image/FifteenMpOutlined';

const meta: Meta<typeof FifteenMpOutlined> = {
  component: FifteenMpOutlined,
  tags: ['autodocs'],
  title: 'image/FifteenMpOutlined',
};

export default meta;
type Story = StoryObj<typeof FifteenMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
