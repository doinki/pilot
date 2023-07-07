import type { Meta, StoryObj } from '@storybook/react';

import LocalBarOutlined from '../../lib/maps/LocalBarOutlined';

const meta: Meta<typeof LocalBarOutlined> = {
  component: LocalBarOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalBarOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalBarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
