import type { Meta, StoryObj } from '@storybook/react';

import DisabledByDefaultOutlined from '../../lib/action/DisabledByDefaultOutlined';

const meta: Meta<typeof DisabledByDefaultOutlined> = {
  component: DisabledByDefaultOutlined,
  tags: ['autodocs'],
  title: 'action/DisabledByDefaultOutlined',
};

export default meta;
type Story = StoryObj<typeof DisabledByDefaultOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
