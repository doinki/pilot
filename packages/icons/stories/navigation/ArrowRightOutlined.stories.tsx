import type { Meta, StoryObj } from '@storybook/react';

import ArrowRightOutlined from '../../lib/navigation/ArrowRightOutlined';

const meta: Meta<typeof ArrowRightOutlined> = {
  component: ArrowRightOutlined,
  tags: ['autodocs'],
  title: 'navigation/ArrowRightOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
