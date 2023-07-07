import type { Meta, StoryObj } from '@storybook/react';

import LocalFireDepartmentOutlined from '../../lib/maps/LocalFireDepartmentOutlined';

const meta: Meta<typeof LocalFireDepartmentOutlined> = {
  component: LocalFireDepartmentOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalFireDepartmentOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalFireDepartmentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
