import type { Meta, StoryObj } from '@storybook/react';

import IncompleteCircleOutlined from '../../lib/image/IncompleteCircleOutlined';

const meta: Meta<typeof IncompleteCircleOutlined> = {
  component: IncompleteCircleOutlined,
  tags: ['autodocs'],
  title: 'image/IncompleteCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof IncompleteCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
