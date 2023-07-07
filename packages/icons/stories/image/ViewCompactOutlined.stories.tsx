import type { Meta, StoryObj } from '@storybook/react';

import ViewCompactOutlined from '../../lib/image/ViewCompactOutlined';

const meta: Meta<typeof ViewCompactOutlined> = {
  component: ViewCompactOutlined,
  tags: ['autodocs'],
  title: 'image/ViewCompactOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewCompactOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
