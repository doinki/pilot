import type { Meta, StoryObj } from '@storybook/react';

import LocalPlayOutlined from '../../lib/maps/LocalPlayOutlined';

const meta: Meta<typeof LocalPlayOutlined> = {
  component: LocalPlayOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalPlayOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalPlayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
