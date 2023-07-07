import type { Meta, StoryObj } from '@storybook/react';

import FlagCircleOutlined from '../../lib/content/FlagCircleOutlined';

const meta: Meta<typeof FlagCircleOutlined> = {
  component: FlagCircleOutlined,
  tags: ['autodocs'],
  title: 'content/FlagCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof FlagCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
