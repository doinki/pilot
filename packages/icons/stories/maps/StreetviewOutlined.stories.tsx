import type { Meta, StoryObj } from '@storybook/react';

import StreetviewOutlined from '../../lib/maps/StreetviewOutlined';

const meta: Meta<typeof StreetviewOutlined> = {
  component: StreetviewOutlined,
  tags: ['autodocs'],
  title: 'maps/StreetviewOutlined',
};

export default meta;
type Story = StoryObj<typeof StreetviewOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
