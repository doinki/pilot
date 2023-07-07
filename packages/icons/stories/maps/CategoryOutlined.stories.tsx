import type { Meta, StoryObj } from '@storybook/react';

import CategoryOutlined from '../../lib/maps/CategoryOutlined';

const meta: Meta<typeof CategoryOutlined> = {
  component: CategoryOutlined,
  tags: ['autodocs'],
  title: 'maps/CategoryOutlined',
};

export default meta;
type Story = StoryObj<typeof CategoryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
