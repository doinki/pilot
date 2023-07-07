import type { Meta, StoryObj } from '@storybook/react';

import ChevronRightOutlined from '../../lib/navigation/ChevronRightOutlined';

const meta: Meta<typeof ChevronRightOutlined> = {
  component: ChevronRightOutlined,
  tags: ['autodocs'],
  title: 'navigation/ChevronRightOutlined',
};

export default meta;
type Story = StoryObj<typeof ChevronRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
