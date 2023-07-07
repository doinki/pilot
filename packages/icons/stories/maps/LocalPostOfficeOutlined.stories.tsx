import type { Meta, StoryObj } from '@storybook/react';

import LocalPostOfficeOutlined from '../../lib/maps/LocalPostOfficeOutlined';

const meta: Meta<typeof LocalPostOfficeOutlined> = {
  component: LocalPostOfficeOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalPostOfficeOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalPostOfficeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
