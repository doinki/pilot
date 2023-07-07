import type { Meta, StoryObj } from '@storybook/react';

import LocalAtmOutlined from '../../lib/maps/LocalAtmOutlined';

const meta: Meta<typeof LocalAtmOutlined> = {
  component: LocalAtmOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalAtmOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalAtmOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
