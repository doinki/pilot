import type { Meta, StoryObj } from '@storybook/react';

import CoronavirusOutlined from '../../lib/social/CoronavirusOutlined';

const meta: Meta<typeof CoronavirusOutlined> = {
  component: CoronavirusOutlined,
  tags: ['autodocs'],
  title: 'social/CoronavirusOutlined',
};

export default meta;
type Story = StoryObj<typeof CoronavirusOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
